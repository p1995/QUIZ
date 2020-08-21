import React, { useEffect, useState } from "react";
import { CardColumns, Card } from "react-bootstrap";
import $ from "jquery";
import AnyCategory from "./AnyCategory";
var url = "";
function Dashboard() {
  const [shownextPage, setshownextPage] = useState(false);

  useEffect(() => {
    $(".card").click(e => {
      console.log(e.currentTarget);
      url = $(e.currentTarget).attr("url");

      setshownextPage(true);
    });
  }, []);
  return (
    <div>
      {shownextPage ? (
        <AnyCategory url={url} />
      ) : (
        <CardColumns>
          <Card
            text="white"
            className="text-center"
            url="https://opentdb.com/api.php?amount=10"
          >
            <Card.Img
              src={require("../images/AnyCategory.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Any Category</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center"
            url="https://opentdb.com/api.php?amount=10&category=9"
          >
            <Card.Img
              src={require("../images/GeneralKnowledge.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">General Knowlegde</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center"
            url="https://opentdb.com/api.php?amount=10&category=10"
          >
            <Card.Img src={require("../images/Books.jpg")} alt="Card image" />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Entertainment:Books</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center"
            url="https://opentdb.com/api.php?amount=10&category=12"
          >
            <Card.Img src={require("../images/Music.jpg")} alt="Card image" />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Entertainment:Music</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>

          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=13"
          >
            {" "}
            <Card.Img
              src={require("../images/MusicalTheaters.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Entertainment: Musicals & Theatres</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=14"
          >
            <Card.Img
              src={require("../images/Television.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Entertainment: Televsion</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=15"
          >
            <Card.Img
              src={require("../images/VideoGames.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Entertainment: Video Games</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=16"
          >
            <Card.Img
              src={require("../images/BoardGames.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Entertainment: Board Games</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=17"
          >
            <Card.Img
              src={require("../images/Science-Nature.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Science and Nature</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=18"
          >
            <Card.Img
              src={require("../images/Science-Computers.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Science: Computers</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=19"
          >
            {" "}
            <Card.Img
              src={require("../images/Mathematics.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic" style={{ color: "green" }}>
                  Science: Mathematics
                </p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=20"
          >
            {" "}
            <Card.Img src={require("../images/Myths.jpg")} alt="Card image" />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Mythology</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=21"
          >
            <Card.Img src={require("../images/Sports.jpg")} alt="Card image" />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Sports</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=22"
          >
            <Card.Img
              src={require("../images/Geography.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Geography</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=23"
          >
            {" "}
            <Card.Img src={require("../images/History.jpg")} alt="Card image" />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">History</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=24"
          >
            <Card.Img
              src={require("../images/Politics.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Politics</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>

          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=25"
          >
            {" "}
            <Card.Img src={require("../images/Art.jpg")} alt="Card image" />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Art</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=26"
          >
            {" "}
            <Card.Img
              src={require("../images/Celebrity.jpg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Celebrities</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
          <Card
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=27"
          >
            {" "}
            <Card.Img src={require("../images/Animals.jpg")} alt="Card image" />
            <Card.ImgOverlay>
              <blockquote className="blockquote mb-0 card-body">
                <p class="quizTopic">Animals</p>
              </blockquote>
            </Card.ImgOverlay>
          </Card>
        </CardColumns>
      )}
    </div>
  );
}

export default Dashboard;
