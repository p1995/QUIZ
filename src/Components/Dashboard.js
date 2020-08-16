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
        </CardColumns>
      )}
    </div>
  );
}

export default Dashboard;
