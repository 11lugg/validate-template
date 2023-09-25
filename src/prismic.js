import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "validate-template";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5aUkZQNHhBQUFDZ0FTSkFQ.77-9SO-_vXjvv707We-_vTYy77-977-9VVzvv73vv71sPu-_ve-_vUViVCLvv73vv73vv73vv713He-_vTE",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "homepage",
      path: "/",
    },
  ],
});
