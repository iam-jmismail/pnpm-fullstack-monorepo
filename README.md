# PNPM monorepo for fullstack project

## Usage

```sh
# Install pnpm globally
npm i -g pnpm

# Install all dependencies
pnpm install

# Run Frontend
pnpm run start:frontend

# Run Frontend
pnpm run start:backend

# Add dependencies
cd packages/backend
pnpm add <package-name>
pnpm add -D <package-name>


```

### Git Commit Flags

- **`feat`**: A new feature for the user.
- **`fix`**: A bug fix.
- **`chore`**: A task that doesn’t affect the application’s behavior (e.g., refactoring, updating dependencies).
- **`docs`**: Documentation changes.
- **`style`**: Code style changes (e.g., formatting, indentation) that do not affect functionality.
- **`refactor`**: A code change that neither fixes a bug nor adds a feature, but improves the structure or readability of the code.
- **`perf`**: A performance improvement.
- **`test`**: Adding or updating tests.
- **`ci`**: Changes related to the CI/CD pipeline (e.g., configuration changes).
- **`build`**: Changes related to the build system or external dependencies.
- **`revert`**: Reverts a previous commit.
- **`WIP`**: A work-in-progress commit, indicating that the commit is not finished.
- **`breaking`**: A commit that introduces breaking changes (usually added to `feat` or `fix`).
