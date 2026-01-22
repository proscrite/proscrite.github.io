import React from 'react'
import { Link } from 'react-router-dom'
import ManhattanInteractiveMap from './ManhattanInteractive';
import './Manhattan.css'
// import sabbathSetupImg from '../images/cfm_optics6.jpg'
import playBooksImg1 from './images/books/playBooks1.png'
import playBooksImg2 from './images/books/playBooks2.png'
import playBooksImg3 from './images/books/playBooks3_docs.png'
import kindleImg1 from './images/books/kindle1.png'
import kindleImg2 from './images/books/kindle2_html.png'
import GtranslateImg from './images/books/GTranslation_hebrew.png'
import GtranslateGermanImg from './images/books/GTranslation_german.png'
import TeamVid from './images/mht_team_vid.mov'
import MaAnimationVid from './images/mht_animation_vid.mov'
import pealimImg from './images/pealim_screenshot.png'

const bookImages = [
  playBooksImg1,
  playBooksImg2,
  playBooksImg3,
  kindleImg1,
  kindleImg2,
];

const GTranslImages = [
  GtranslateImg,
  GtranslateGermanImg
]

const manVideos = [
  TeamVid,
  MaAnimationVid,
];

const captions_videos = [
  'Team video — development snapshots',
  'Animation — mascot / UI animation demo',
];

const captions_books = [
  "Screenshot of Play Books e-book reader with highlighted words",
  "Highlighted words can be annotated. Selecting full sentences is also possible.",
  "Screenshot of Google Docs (in .docx) export of highlighted words from Play Books",
  "Screenshot of Kindle e-book reader with highlighted words for a book in German ('Die Vewanderung' by Franz Kafka) and another in Italian ('Il castello dei destini incrociati' by Italo Calvino).",
  "The highlights are exported in an HTML file, which can be parsed to extract the words.",
];

const captions_gtransl = [
  "Translation Database in Google Translate for Hebrew",
  "Translation Database in Google Translate for German",
];



export default function ManhattanPage() {
  const [bookIndex, setBookIndex] = React.useState(0);
  const [gTranslIndex, setGTranslIndex] = React.useState(0);
  const [videoIndex, setVideoIndex] = React.useState(0);
  
  return (
    <div className="projects-container">
      <h1>ManHatTan</h1>
      
      <p align="justify">
        This project is special to me, as it doesn't directly relate to my scientific career,
         but to my personal journey enjoying reading books in different languages. 
         You can test a mock version of the software here. Keep in mind this is a demo version with limited functionality.
         If you want to know more about its development, scroll down!
      </p>

      <div>
        <ManhattanInteractiveMap/>
      </div>

      <h2>About the project</h2>

      <h3> Project Inception </h3>
      <p align="justify">
        The project started when I noticed that most e-book readers supported highlighting words and storing them in a "database".
        You can see an example of this in the images below. This is useful for language learners, as they can highlight words they don't know and look them up later.
        However, I found that this was not engaging enough, as it didn't encourage active recall, which is a proven method for learning.
        I wanted to create a tool that would allow me to read books in different languages, highlight words, and then test myself on those words using different types of exercises.
      </p>
      <p align="justify">
        Thus, ManHatTan was born. The name is a reference to my approach to language learning: decompose the words into smaller chunks, and let a mnemonic appear on its own.
        For example Man-Hat-Tan can be a man wearing a hat and sporting some interesting tan. Say, blue? Like Dr. Manhattan from Watchmen? Maybe he likes drinking Manhattan cocktails too?
      </p>
      <p align="justify">
        In addition, I started this project back in 2020 during the COVID-19 pandemic, when I had more time to work on personal projects. 
        This was previous to the surge of AI-based coding tools, in the time of endless StackOverflow searches. 
        So developing this software in the scarce breaks I had from my PhD research seemed quite a challenge at the time. Thus I started referring to it as my "ManHatTan project", as a nod to the perseverance needed to complete it.
      </p>
      <div className="doc-image-wrapper">
        <img 
        src={bookImages[bookIndex]} alt={"ManHatTan e-book reader " + (bookIndex + 1)} 
        className='project-image clickable-image'
        onClick={() => setBookIndex((bookIndex + 1) % bookImages.length)}
        />
        <div className="image-caption">
          <p>{captions_books[bookIndex]} ({bookIndex + 1} / {bookImages.length})</p>
        </div>
        <div className="image-navigation">
            <button onClick={() => setBookIndex((bookIndex - 1 + bookImages.length) % bookImages.length)}>Previous</button>
            <button onClick={() => setBookIndex((bookIndex + 1) % bookImages.length)}>Next</button>
        </div>
      </div>
      
      <p align="justify">
        I started by writing scripts to parse the exported highlights from e-book readers like Kindle and Google Play Books.
        This involved dealing with different file formats: Google Play Books exports highlights in a gdoc format, while Kindle uses a html file.
      </p>
      <p align="justify">
        Once I had a "database" of words to practice with, I needed to obtain a translation for each word into a reference language.
        Since German is similar to English in many aspects, I chose it as my reference language for learning German. 
        But Italian is more similar to my native Spanish, so I used it as my reference language in that case.
      </p>
      <p align="justify">
        To handle this, I used the Google Translate API, which allowed me to get translations for words in multiple languages.
        These translations are sometimes not totally accurate, especially when they lack context, but they are good enough for my purposes.
        Moreover, I implemented a database update screen that allows me to manually correct translations when needed.
      </p>
      <p align="justify">
        At this stage I realized that Google Translate also supports storing custom translation databases directly in a csv format.
        In fact, I found that my Google Translate database was already very rich, as I had been using it for years to store translations of words I frequently use.
        Therefore, I added support for importing and exporting these csv files, so I could easily update my translation database.
      </p>
      <div className="doc-image-wrapper doc-image-wrapper--narrow">
        <img 
        src={GTranslImages[gTranslIndex]} alt={"ManHatTan e-book reader " + (gTranslIndex + 1)} 
        className='project-image clickable-image'
        onClick={() => setGTranslIndex((gTranslIndex + 1) % GTranslImages.length)}
        />
        <div className="image-caption">
          <p>{captions_gtransl[gTranslIndex]} ({gTranslIndex + 1} / {GTranslImages.length})</p>
        </div>
        <div className="image-navigation">
            <button onClick={() => setGTranslIndex((gTranslIndex - 1 + GTranslImages.length) % GTranslImages.length)}>Previous</button>
            <button onClick={() => setGTranslIndex((gTranslIndex + 1) % GTranslImages.length)}>Next</button>
        </div>
      </div>
    
    <h3> GUI development and Gamification </h3>
      <p align="justify">
        At this point I started experimenting with different GUI frameworks. Since I was already familiar with Python, I decided to use Kivy, a popular framework for building cross-platform applications.
        I created different types of exercises to test my knowledge of the highlighted words.
        These initially included multiple-choice exercises, where I have to choose the correct translation from a list of options; and written input exercises, where I have to type the translation myself.
        I also implemented two variants of each exercise: direct translation (from the foreign language to the reference language) and reverse translation (from the reference language to the foreign language).
        I found that it was very useful to start with direct translation to build a basic vocabulary, and then use reverse translation to reinforce my knowledge and improve recall.
      </p>
      <p align="justify">
        At this point I put the project on hold for a few years, as I got busy with my PhD research and other commitments. However, last year I decided to pick it up again and continue developing it.
        Now with the advent of AI-based coding tools, I found it much easier to implement new features and improve the existing ones.
        I started by gamifying the learning experience: I associated each word with a digital "mascot", a Pokemon character that represents the word. 
        The progress in learning the word is represented by the evolution of the mascot: the more exercises I complete correctly, the higher the level of the mascot.
        I added dynamic sprites as animations in the exercises to make the mascot seem alive and not just a nice but meaningless decoration. 
        This required some dedication, but the result was very satisfying. The next videos show some screenshots of the development process.
      </p>
      
      <div className={`video-wrapper ${videoIndex === 0 ? 'video-wrapper--50' : 'video-wrapper--70'}`}>
        <video
          className="project-video"
          src={manVideos[videoIndex]}
          muted
          playsInline
          autoPlay
          loop
          controls={true}
          onClick={() => setVideoIndex((videoIndex + 1) % manVideos.length)}
        />
        <div className="video-caption-below">
          <p>{captions_videos[videoIndex]} ({videoIndex + 1} / {manVideos.length})</p>
        </div>
        <div className="video-navigation-below">
          <button onClick={() => setVideoIndex((videoIndex - 1 + manVideos.length) % manVideos.length)}>Previous</button>
          <button onClick={() => setVideoIndex((videoIndex + 1) % manVideos.length)}>Next</button>
        </div>
      </div>

      <p align="justify">
        Furthermore, the individual exercises are presented as combat stats of the mascot: Attack, Defense, Special Attack and Special Defense.
        Speed is represented by how quickly I answer the questions. The HP keeps track of the recall half-life: the longer I go without reviewing the word, the lower the HP.
        I also added a "team" mechanic: a batch of six words to focus the practice on. The team is automatically refreshed with new entries after certain progress.
      </p>

      <h3> NLP Experiments and Advanced Exercises </h3>
      <p align="justify">
        Next I started experimenting with classical NLP techniques and libraries, such as SpaCy. At this time I was trying to learn Hebrew, which was challenging because this language is not supported by many libraries.
        In the end, I found a way to import word embeddings from annotated corpora and use them to find similar words to the ones in the database.
        I gamified this asset by implementing an "egg" mechanic: you can "hatch" an egg by practicing similar words, and when the egg hatches you get a new mascot representing the new word.
      </p>
      <p align="justify">
        Recently I also added a new type of exercise: Hebrew verbs conjugation. Since Hebrew is a highly inflected language, I found it very useful to practice verb conjugations in different tenses and persons.
        This exercise presents the user with a verb in its infinitive form, along with a prompt indicating the tense and person you need to conjugate it into.
        This is achieved by scraping a Hebrew verbs conjugation website, which provides the correct conjugations for a wide range of verbs.
      </p>
      <div className="doc-image-wrapper doc-image-wrapper--narrow">
        <img 
        src={pealimImg} alt={"Hebrew verbs conjugation screenshot"} 
        className='project-image clickable-image'
        />
        <div className="image-caption">
          <p>Screenshot of the <Link to="https://www.pealim.com/dict/998-lelatef/"> Hebrew verbs conjugation page.</Link> </p>
        </div>
      </div>
      <p align="justify">
        Currently, I am working on adding AI-powered "cloze" exercises, where I have to fill in the blanks in a sentence with the correct word.
        The sentence is generated using an LLM model, which provides context for the word and makes the exercise more engaging.
        Each exercise type is implemented as a separate screen, and I can navigate between them using a simple menu.
      </p>
      <p align="justify">
        The project is still a work in progress, and I plan to add more features in the future, such as spaced repetition algorithms to optimize the review process (there is a beta version already in place),
        and gamify much more the learning experience. Eventually, I plan to migrate the GUI to a web-based framework, so I can access it from any device without needing to install anything.
        However, I'm quite happy with the current state of the software, as it has already helped me improve my vocabulary in several languages.
      </p>
      <p align="justify">
        If you're interested in trying out ManHatTan or learning more about its development, feel free to reach out!
      </p>
    </div>
  )
}