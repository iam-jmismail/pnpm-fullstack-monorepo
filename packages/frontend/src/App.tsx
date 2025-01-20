import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  debounceTime,
  distinctUntilChanged,
  from,
  fromEvent,
  interval,
  map,
  retry,
  throttleTime,
} from "rxjs";

const fetchDataPromise = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json());

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [price, setPrice] = useState(100);

  useEffect(() => {
    const button = document.querySelector("button") as HTMLButtonElement;
    const clicks$ = fromEvent(button, "click");

    const subscription = clicks$
      .pipe(
        throttleTime(1000),
        map(() => "Button Clicked...")
      )
      .subscribe((message) => {
        console.log(message);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const searchInput = document.getElementById(
      "search-input"
    ) as HTMLInputElement;

    const input$ = fromEvent(searchInput, "input");

    const subscription = input$
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value) => setSearchInput(value));

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetch$ = from(fetchDataPromise());

    const subscription = fetch$.pipe(retry(3)).subscribe({
      next: (value) => console.log(value),
      error: (err) => {
        console.log("error ", err);
      },
      complete: () => console.log("Completed"),
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const price$ = interval(1000).pipe(
      map(() => (100 + Math.random() * 10).toFixed(2)) // Simulate price changes
    );

    const subscription = price$.subscribe((newPrice) => setPrice(+newPrice));

    return () => subscription.unsubscribe(); // Clean up on unmount
  }, []);

  return (
    <Container className="my-4">
      {searchInput}

      <div>
        <input type="text" name="search-input" id="search-input" />
        <button id="rxjs-button"> Search </button>
      </div>

      <div> Price : {price}</div>
    </Container>
  );
};

export default App;
