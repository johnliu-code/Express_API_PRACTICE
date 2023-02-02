import React, { useState } from 'react';
import { Image, Accordion, Icon } from 'semantic-ui-react'

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState({
    myactiveIndex : 0
  });
  const { myactiveIndex  } = activeIndex;

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index

    setActiveIndex({ myactiveIndex: newIndex })
  }

  return (
    <div className='page'>
      <h1>Using 4.8M FREE photos from Unsplash API to create your own Photo Stories...</h1>
      <Image src='unsplashAPI.png' fluid />  
      <Accordion>
        <Accordion.Title
          active={myactiveIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          How to start?
        </Accordion.Title>
        <Accordion.Content active={myactiveIndex  === 0}>
          <p>
            1. Sign up an account with username, email, and password; <br />
            2. Search for image or poetry by click the buttons and search it on the page, add it to your collection; <br />
            3. Click Add story button to create your own photo stories; <br />
            4. Update story by click which button on the story table line, change the title, set up line of poetry you want to keep, update it; <br />
            5. Delete it by click the delete button on the story line; <br />
            6. Logout when you want to leave. Enjoy it!! <br />
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={myactiveIndex  === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          How to use Official Unsplash API?
        </Accordion.Title>
        <Accordion.Content active={myactiveIndex  === 1}>
          <p>
            the Official Unsplash API. Create with the largest open collection of high-quality photos. <br />
            Creating a developer account, To access the Unsplash API, first join. <br />
            Once your account has been registered for the API, go to your apps. Click “New Application”, and fill in the required details. <br />
            All applications must follow the API Guidelines, including properly providing attribution for the photographer and Unsplash. <br />
            You can also pass this value using a client_id query parameter: <br />
                    https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY <br />
            Search photos: Get a single page of photo results for a query.  <br />
                    GET /search/photos   <br />
            
            More details please check here: https://unsplash.com/documentation   <br />
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={myactiveIndex  === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          PoetryDB is an API for internet poets. How it works?
        </Accordion.Title>
        <Accordion.Content active={myactiveIndex  === 2}>
          <p>
          You send a URL like so:  <br />
          <br />
          https://poetrydb.org/title/Ozymandias/lines.json   <br />
          <br />
          And hey, presto! out comes the lines of Shelley's famous sonnet:  <br />
          <br />
                "I met a traveller from an antique land",   <br />
                "Who said: \"Two vast and trunkless legs of stone", <br />
                "Stand in the desert. Near them on the sand,", <br />
                "Half sunk, a shattered visage lies, whose frown", <br />
                "And wrinkled lip and sneer of cold command", <br />
                "Tell that its sculptor well those passions read", <br />
                "Which yet survive, stamped on these lifeless things,", <br />
                "The hand that mocked them and the heart that fed.", <br />
                "And on the pedestal these words appear:", <br />
                "'My name is Ozymandias, King of Kings:", <br />
                "Look on my works, ye mighty, and despair!'", <br />
                "Nothing beside remains. Round the decay", <br />
                "Of that colossal wreck, boundless and bare,", <br />
                "The lone and level sands stretch far away\"." <br />

          </p>
        </Accordion.Content>
      </Accordion>
    </div>
  )
}

export default HomePage