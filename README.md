
# Setting Up The Project

Follow these steps to set up and run the project locally, as well as configure it for deployment on Vercel.

### 1. Clone the Repository

First, clone the repository from GitHub to your local machine:

```bash
git clone https://github.com/devdesiignn/veriphye-test.git
cd veriphye-test
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed, then run the following command to install the project's dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

This project requires two environment variables to be set up:

* `VITE_GRAPHQL_URI`: The GraphQL URI endpoint that the application will use to fetch data.
* `VITE_GITHUB_TOKEN`: A GitHub Personal Access Token (PAT) for authentication when interacting with GitHub's API.

#### Local Development (.env.local)

To set up the environment variables locally, create a `.env.local` file in the root of the project (if it doesn't exist already). Add the following:

```
VITE_GRAPHQL_URI=<your-graphql-uri>
VITE_GITHUB_TOKEN=<your-github-token>
```

Replace `<your-graphql-uri>` and `<your-github-token>` with your actual values.

##### How to Obtain a GitHub Personal Access Token (PAT)

1. Go to [GitHub's PAT settings page](https://github.com/settings/tokens).
2. Click **Generate new token**.
3. Give the token a name and select the required permissions (**repo**).
4. Click **Generate token** and copy it.

### 4. Run the Project Locally

After setting up the `.env.local` file, you can run the project locally:

```bash
npm run dev
```

The app should now be running locally, and you can access it at `http://localhost:3000`.

---

### 5. Deployment on Vercel

To deploy the project on Vercel, you will need to configure the environment variables through the Vercel dashboard.

#### Setting Environment Variables on Vercel

1. Go to the project in the [Vercel Dashboard](https://vercel.com/dashboard).

2. Click on **Settings** in the sidebar.

3. Scroll down to the **Environment Variables** section.

4. Click on **Add** to add the required environment variables:

   * **Name:** `VITE_GRAPHQL_URI`

   * **Value:** `<your-graphql-uri>`

   * **Name:** `VITE_GITHUB_TOKEN`

   * **Value:** `<your-github-token>`

5. After adding these variables, Vercel will automatically build and deploy the project using the environment variables.

### 6. Troubleshooting

If you run into any issues, ensure that:

* Your GraphQL URI and GitHub token are correct.
* Your `.env.local` file is properly formatted and placed in the root of your project.
* The Vercel environment variables are set correctly and deployed.
