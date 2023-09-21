# Panda Wallet - Non-Custodial Web3 Wallet For BSV

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Panda Wallet is an open-source and non-custodial web3 wallet for Bitcoin SV (BSV) and 1Sat Ordinals. This wallet allows users to have full control over their funds, providing security and independence in managing their assets.

![Panda Wallet Screenshot](screenshot.png)

## Features

- **Non-Custodial:** Your private keys are encrypted and stored locally on your device, ensuring complete control over your funds.
- **User-Friendly:** A user-friendly interface makes asset management a breeze.
- **BSV Support:** Receive and Send BSV payments.
- **1Sat Ordinals:** Full support for sending and transferring 1Sat Ordinals.
- **Secure:** Open Source and audited by the community.

## Getting Started

To get started with Panda Wallet, follow these steps:

1. **Installation:** Install the Panda Wallet chrome extension. TODO: insert link
2. **Create or Import Wallet:** Create a new wallet or import an existing Panda Wallet using your recovery phrase.
3. **Connect to Providers:** Connect your wallet to 3rd party applications that have integrated the Panda Wallet provider.
4. **Manage Your Assets:** Start sending and receiving BSV and 1Sat Ordinals, manage your portfolio, and explore decentralized applications.

## Development

If you'd like to contribute to Panda Wallet's development, follow these steps:

1. **Clone the Repository:** Clone the repo:

   ```bash
   git clone
   ```

2. **Install Dependencies:** Navigate to the project's root directory and run:

   ```bash
   npm install
   ```

3. **Start the App** Open a local instance of the app:

   ```bash
   npm run start
   ```

4. **Build The Extension** To create a production build of the app, run:

   ```bash
   npm run build
   ```

5. **Run The Extension** Load the extension into your browser using dev mode:

   1. Navigate to [Chrome Extensions](chrome://extensions/) and turn on dev mode.
   2. Click "Load Unpacked".
   3. Upload the production `build` folder.

6. **Customize and Contribute**: Customize the extension or contribute by opening pull requests.

**\*Always Use Prettier for Code Formatting**

Prettier is a powerful code formatter that helps ensure our code remains well-organized and readable. By adhering to Prettier's formatting standards, we can enhance code collaboration and reduce potential errors. Make it a habit to run Prettier before committing any code changes.

## Pull Request (PR) Guidelines

1. **Small and Focused Changes:** PRs should focus on addressing a specific issue, implementing a single feature, or fixing a bug. Keep changes small and avoid bundling unrelated changes in the same PR.

2. **Branch Naming Convention:** Use descriptive branch names that reflect the purpose of the PR. For example, use `feature/add-authentication` or `bugfix/fix-login-issue`.

3. **Code Quality:**

   - Ensure your code follows the project's coding style and conventions.
   - Run linters and code formatters before submitting a PR to maintain code quality.

4. **Test Coverage:**

   - Write tests for new features or changes to ensure they work as expected.
   - Ensure existing tests continue to pass with your changes.

5. **Documentation:**

   - Update documentation to reflect any changes made in the PR.
   - Include code comments where necessary to explain complex logic.

6. **Commit Messages:**

   - Write clear and concise commit messages that explain the purpose of each commit.
   - Use a conventional format like "feat(ordinal): implement transfers" or "fix(service-worker): resolve issue with listener."

7. **Rebase and Resolve Conflicts:** Before merging, ensure your PR is up-to-date with the latest changes from the main branch. Resolve any conflicts that arise during the rebase.

8. **Peer Review:**

   - Request a code review from one or more maintainers.
   - Reviewers should provide constructive feedback and check for code quality, functionality, and adherence to project standards.

9. **CI/CD Checks:**

   - Ensure any continuous integration (CI) tests pass successfully.
   - Make sure the code builds and deploys correctly in the target environment.

10. **Use Labels and Milestones:**

    - Apply labels to categorize PRs (e.g., bug, feature, documentation).
    - Associate PRs with project milestones when applicable.

11. **Avoid Force Pushing:** Once a PR is open, avoid force-pushing changes to the branch. If you need to update the PR, make new commits.

12. **Ownership and Responsibility:**

    - Assign the PR to the person responsible for reviewing and merging it.
    - Authors should address feedback promptly and engage in the review process.

13. **Merging:** PRs should be merged after receiving approval from reviewers and passing all checks.

14. **Delete Branches:** After a successful merge, delete the feature or bugfix branch unless it's a long-lived branch or follows a specific naming convention (e.g., `release/1.0`).

15. **Changelog Updates:** If your project maintains a changelog, update it with changes introduced in the PR.

16. **Security and Compliance:**

    - Consider security implications in your code changes.

17. **Communication:** Provide context and any relevant information in the PR description.

## License

Panda Wallet is released under the [MIT License](https://opensource.org/licenses/MIT)

## Submit Issues

Submit issues to the [Kanban Board](https://github.com/orgs/Panda-Wallet/projects/1)
