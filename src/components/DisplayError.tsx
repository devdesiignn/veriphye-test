import { ApolloError } from "@apollo/client";

type DisplayErrorProps = {
  error: ApolloError | undefined;
};

function DisplayError({ error }: DisplayErrorProps) {
  if (!error) return null;

  if (error.networkError)
    return (
      <p className="text-red-500 text-sm text-center mt-20">
        Network error. Please check your connection.
      </p>
    );

  return (
    <div className="text-red-500 space-y-1 text-sm text-center mt-20">
      {error.graphQLErrors?.length > 0 && (
        <>
          {error.graphQLErrors.map((err, index) => {
            if (err.message.toLowerCase().includes("rate limit")) {
              return <p key={index}>Rate limit exceeded. Please wait and try again later.</p>;
            }

            if (err.message.includes("Could not resolve to a User")) {
              return <p key={index}>User not found. Please check the username.</p>;
            }

            return <p key={index}>Error: {err.message}</p>;
          })}
        </>
      )}
    </div>
  );
}

export default DisplayError;
