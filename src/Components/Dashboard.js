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
            bg="primary"
            text="white"
            className="text-center"
            url="https://opentdb.com/api.php?amount=10"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Any Category</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=9"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>General Knowlegde</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=10"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Entertainment:Books</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=12"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Entertainment:Music</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=13"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Entertainment:Musicals & Theatres</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=14"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Entertainment:Telivsion</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=15"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Entertainment:Video Games</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=16"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Entertainment:Board Games</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=17"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Science and Nature</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=18"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Science : Computers</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=19"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Science : Mathematics</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=20"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Mythology</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=21"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Sports</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=22"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Geography</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=23"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>History</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=24"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Politics</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=24"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Politics</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=25"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Art</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=26"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Celebrities</p>
            </blockquote>
          </Card>
          <Card
            bg="primary"
            text="white"
            className="text-center "
            url="https://opentdb.com/api.php?amount=10&category=27"
          >
            <blockquote className="blockquote mb-0 card-body">
              <p>Animals</p>
            </blockquote>
          </Card>
        </CardColumns>
      )}
    </div>
  );
}

export default Dashboard;
