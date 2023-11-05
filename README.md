## General-Assembly Project 2

# Disney Characters

This project involved the development of a React application that consumes a public API. My partner and I chose to work with the Disney API. This project was a collaborative effort, and we used a technology stack that included React for frontend development. Disney Characters is for those who are interested in learning more about the Disney world. Here, you can discover secondary Disney characters and find information about them.

#### Timeframe

It was a one-day project, but we also had the weekend as well for those who wanted to work and I was working with my colleague Kisalie.


## Want to explore the side of Disney you've never seen before? 

[Disney Characters](https://disney-characters-react.netlify.app/)


## Technologies Used

### React

* Importing and exporting defaults for the different files created.
* Using React-router-dom to create a root, Browser, Route, Routes, and Link.
* We used Axios to fetch the data.
* Using the useEffect and useState Hooks. 
* Using useParams for reading URL parameters.
* We used React Bootstrap to create a spinner and a button.

### Sass

* Using different Sass files to separate the styling by category.
* Created a grid for displaying data using *display: flex*.
* Creating variables to maintain styling consistency across pages.
* Styling different elements such as images, gifs, button, container, and text.

### Insomnia

* Used GET methods to access the API.
* Manipulated the API to obtain the desired results.

### Terminal

* Installation of React and the package.json.
* Installation of some React dependencies such as Sass, React Bootstrap, React-router-dom, and Axios.

### Figma

* Collaboration:  Working in the same design file simultaneously with my colleague.
* Layers and layer organisation.
* Component-Based Design, which helped maintain consistency across designs.
* Creating shapes,  adding text, styling elements, mixing colours.


## Brief

For this project we developed a React application that consumes a public API. The goal was to create a functional web application while adhering to specific technical requirements, such as Including wireframes, having several components, and being deployed online. The project codebase is hosted on GitHub.


## Planing

Our project journey commenced with the search for a proper API. It was essential to find one capable of accommodating our needs without overwhelming it with requests.

Initially, we were drawn to a plants API, finding it particularly appealing. We delved into crafting our wireframe while awaiting our tutor's input on our plan. However, as we delved deeper, we discovered that this API couldn't provide the necessary volume of requests, and time was becoming a pressing constraint. In response, we swiftly pivoted our strategy, opting for the Disney API focusing on secondary characters. This transition necessitated a quick but crucial adjustment to our wireframe to align with this new data source.

We wanted to have three pages for our project. The first page was the Home page, where we planned to include an image or gif related to the topic. We also added a button to navigate to the next page, and at the top left corner, there was an icon that would be present on all pages to allow users to return to the Home page.

For the second page, we focused on introducing our character. Here, we created a grid that displayed our second character.
 
As for our approach to working together, we initially started by collaborating on various aspects of the project. However, we divided tasks to make the most of our skills and preferences. I took on more of the styling work, while Kisalies concentrated on the functionality. 
Moreover, whenever one of us faced challenges or needed assistance, we were readily available to work together, brainstorm, and solve problems collectively. 

### Figma Plan:

![Figma plan](<readmeimg/figma plan.png>)

### Disney API website and the data in Insomnia:

![Disney API](<readmeimg/disney api.png>)


## Project Breakdown


The project started with the search for a suitable API. Initially, a plant API was considered, but its limited daily request quota (300 requests per day) raised concerns. We started by planning a wireframe on Figma while waiting to discuss with the instructor about the project. When we had our talk we were told that there were not enough requests that we should change. We decided to use a Disney API that provided information about secondary characters and had unlimited requests.

After initial planning, the coding process began with the installation of necessary dependencies and packages, including json packages and others deemed necessary for the project. We were coding along and ensured an organised project structure by creating folders and files in an organised manner. The index.js file served as the principal entry point. It included the creation of the root, importing React, creating the root render, and including SASS. 
React Router (BrowserRouter from React-router-dom) was used to establish route paths for the project. This allowed for navigation between different pages of the application.
Axios was used to extract data from the chosen API. 

### Characters:

```javascript

  useEffect(() => {

    async function getCharacterData() {
      try {
        const { data } = await axios('/api/character', { params: { pageSize: 500 } })
        setCharacters(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacterData()
  }, [])

```

### Characters ID:

```javascript

  //  State
  const [character, setCharacterInfo] = useState(null)
  const { id } = useParams()


  useEffect(() => {

    async function getCharacterData() {
      try {
        const { data } = await axios(`/api/character/${id}`)
        setCharacterInfo(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacterData()
  }, [id])

```

I did mostly the character List while my colleague was doing mostly the character info for our  third page.

Used useEffect to fetch the data on component’s first render, then I set the State with the response data then In the JSX portion of our component, I mapped over the character data to display relevant information. I wanted to display the character's name and image. To enable navigation to a Character Info page, you imported the Link component from react-router-dom. I used this to create clickable images that would direct users to the next page, the same for the logo that you see on the top left, this image later changed by my colleague. Clicking this logo takes users back to the home page. This provides consistent navigation throughout  and appears throughout the SPA (single-page application). In our API there where some images url that were not available and for these we wanted a image not found appear, I did a ternary operator, (later improved with the || operator), to handle cases where image URLs were not available.

```javascript

  return (
    <>
      <img className="disney-gif-characters" src='/images/disney.gif' alt="Disney-gif" />
      <section className="container">

        {characters.length > 0 ? characters.map((character => {
          const characterName = character.name
          return (

            <div className="character-list character" key={character._id}>
              <h2>{characterName}</h2>
              <Link to={`/characters/${character._id}`}>
                <img alt={character.name} src={character.imageUrl || 'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png'} />
              </Link>
            </div>
          )
        })) : <Spinner style={{ marginTop: '3rem' }} animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
      </section>
    </>
  )
}

```

I was responsible for styling the pages, ensuring a visually appealing and cohesive design across the application. I positioned items in the middle of the pages, which contributes to a balanced and aesthetically pleasing layout. I applied a border-radius to images and gifs. I selected an appropriate font for text and titles.

### Character List:

* Grid display flex with a *calc(25% - 20px);* value to create a grid layout for displaying characters. To ensure that each character card takes up 25% of the available width with a 20px gap between them.
* Setting the width of the character images to 100%, allowing them to fill the entire width of their container. 
* I’ve applied a box-shadow to the images to add a consistent stylistic element. 
* I achieved a distinctive appearance for the gif by applying a unique border-radius. Specifically, I set significantly different values for the first two parameters of the border-radius property. Furthermore, as mentioned before, this gif changes colour when hovered.

```css

// Buttons Style CSS 

main .disney-gif-characters {
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px 65px;
  box-shadow: 7px 12px 11px 0px rgb(36 44 181);
  height: 300px;
  transition: all 1s;
  &:hover {
    box-shadow: 7px 12px 11px 0px rgb(23 247 112);
  }
}

```

### Character Info:

* I’ve used display flex to align items and have a column direction. Which helped to create a vertically oriented layout for the character information, ensuring a well-structured presentation.
* I've applied styling to the text information on the page. This includes setting a max-width, adding letter spacing to improve readability, and giving the text a background colour with a darker shade of purple.
* The title, represented by an h2 tag, has the same background colour as the page. Additionally, I've applied a box shadow to the title, creating a visual link to other pages.

We met up to review the work that each one had completed and reached agreements. We made some minor changes, and we were almost ready for the presentation when, on the day of the presentation, the data suffered an update. Some images were missing, some new were added, and there were changes to the information, which resulted in adjustments to some of our styles.

We functioned as a well-coordinated team throughout the project. While working together, it was evident that I was more inclined to take more risks, whereas my colleague preferred a more secure approach. Despite this difference in approach, we maintained open communication and sought each other's opinions regularly to ensure mutual agreement. For a first group project, our teamwork was successful, and we accomplished our goals.


## Final Product

### Home Page:

![Home Page](<readmeimg/home page.png>)

### Characters Page:

![Game in progress](<readmeimg/characters.png>)

![Game in progress](<readmeimg/effect hover.png>)

### Character Detail Page:

![Game over overlay](<readmeimg/character.png>)

![Wins overlay](<readmeimg/images display.png>)


### Wins

1. **Enhanced User Interaction:** Implemented hover effects on the GIF from the second page where they transition from blue to green when hovered.

2. **Image Styling:** Applied box shadows to the images, creating a magical environment and adding depth to the visuals.

3. **Layout and Design:** Successfully positioned a grid with flex in the middle of the page, showcasing your characters and adding a touch of magic.

4. **Data Handling:** Successfully obtained the IDs from your characters and displayed their names and images. Additionally, handled cases where there were no images by substituting them with alternative images.


### Challenges

1. **API Complexity:** Working with the chosen API presented various challenges and unexpected surprises. Despite the difficulties, we decided to accept the challenge and successfully made it work.

2. **Data volume:** One of the challenges involved dealing with the volume of data returned by the API. To address this, Kisale manipulated the data to only display 500 characters *“const { data } = await axios('/api/character', { params: { pageSize: 500 } })“*.

3. **Data Quality:** The API presented data quality challenges, including issues with invalid image resources. The intention was to display the “image not found” placeholder, but when we refreshed the page this approach was slowing down the process, so we decided not to prioritise this specific issue. An effective solution in the future could involve implementing a package React Lazy Load which helps to defer loading content in predictable ways.

4. **API Updates:** On the day of presenting the project, encountered unexpected changes in the API, resulting in missing images and styling issues on the characters list page. Despite this last-minute issue, as a team we remained calm and successfully resolved the issues in time for the presentation. This highlights my team's adaptability and problem-solving skills under pressure.


### Key Learnings

Effective Teamwork: Learned the importance of working collaboratively within a team, respecting each team member's opinions, and providing mutual assistance. This experience improved interpersonal skills and teamwork dynamics.

API Integration: Gained knowledge about working with APIs, extracting and processing data from external sources, and recognizing the significance of thoroughly understanding the data provided by the API.

React Ecosystem: Acquired proficiency in working with various React dependencies, including React-Router-Dom, Axios, Sass, and React-Bootstrap, which are essential tools for building modern web applications.

Use of React Hooks: Learned how to use React Hooks such as useState, useEffect, and useParams, which are crucial for managing state, handling side effects, and reading URL parameters within a React application.


### Bugs

Some images in the API are placeholders and do not display a visible image. When attempting to load these images, an error 404 (Not Found) is encountered.
While we attempted to address this issue, it was deprioritized due to other project priorities. The images are currently displaying the 404 error when they cannot be found.


### Future Improvements

* Resolve the problem with placeholder images in the API. Investigate potential solutions to display meaningful or alternative images when placeholders are encountered.
* Explore opportunities to further enhance the project's styling using Bootstrap. 
* Optimise the way I manipulate data from the API. More efficient data processing techniques to improve the application's performance.
* Update the style a bit more for my aesthetic.
* Implement new ideas that I have in mind. Explore innovative features or functionality to enhance the user engagement.

