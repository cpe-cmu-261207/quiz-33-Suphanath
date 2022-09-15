import React from "react";
import Reply from "./Reply";
import LikeCount from "./LikeCount";

export default function Comment(props) {
  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
        <img
          src={props.profile_img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {props.owner}
          </span>
          <br />
          <span style={{ color: "#B0B3B8" }}>{props.content}</span>
          <LikeCount liked={props.liked} />
        </div>
      </div>

      {/*render Reply here... */}
      {props.replies.map((x, i) => {
        return (
          <Reply
            key={i}
            owner={x.username}
            content={x.replyText}
            profile_img={x.userImagePath}
            liked={x.likeNum}
          />
        );
      })}
    </div>
  );
}
