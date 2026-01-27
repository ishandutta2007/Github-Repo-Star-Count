# Git Stars

## `Instructions`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don’t jump directly into code.
- Commit your code every 30 minutes with a proper commit message to your repository (we will monitor every commit)
- Use React to solve this question.
- **Use redux for network requests and state management.**
- Use Chakra UI or MUI as a CSS library.

---

## `Problem Statement`

The task is to build a React based web app which lists the most starred GitHub repositories.

**Use this API**

```yaml
[**https://documenter.getpostman.com/view/16496174/2s93CRLXKE**](https://documenter.getpostman.com/view/16496174/2s93CRLXKE)
```

- On Inital load, render all the repo’s in decreasing order of stars with pagination of 10 repo’s per page.
- All the repo’s should have the following Information and clicking on any of those should redirect the user.
  - Name of the Repo
  - Avatar
  - Author
  - Date
  - Description
  - Stars Count
  - Fork Count
  - Issues Count
  ![                                                                    UI Reference Image 1](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48ac3ae9-7047-4ea7-a063-9d91410604e0/Git-Stars-Mock-1.png)
                                                                        UI Reference Image 1
  ***
  ## `Functionalities`
  - Pagination should be implemented with 10 results per page.
  - There should be a search bar at the top of the page where user can search for a specific set of repositories based on their title.
  - The user should be able to filter the repositories based on the language. You can get all the available languages from the JSON file below (Download and Import in your app)

    [languages.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3830751-f16d-469b-8dc6-02c0948101e9/languages.json)

  - The app should have two themes
    - Light Theme
    - Dark Theme
  - The app should have two types of views, and the user should be able to toggle between them.
    - List View
    - Grid View
  ![                                                                      Grid View Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7a0d696c-b394-4d14-9774-3399e3204550/Git-Stars-Mock-2.png)
                                                                          Grid View Reference Image
  ***
  ![                                                          List View Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/35f32b40-a8ee-4b7a-8cda-7fc5c5b25a36/Git-Stars-Mock-3.png)
                                                              List View Reference Image
  ***
  ## `Submissions`
  - Please submit deployed link and Github link of the code.
  - Please double-check if deployed version works or not (run the deployed version on your laptop and then submit it)
  - Any issues in the deployed link will be considered null and void.
  - Please verify your submissions are correct.
  - Make sure you follow all instructions carefully.
  - Submit before the deadline.
  ***
  ## `Rubrics`
  - React
  - API Call and Promises
  - Redux
  - Search, Filter and Pagination
  - Chakra UI /MUI
