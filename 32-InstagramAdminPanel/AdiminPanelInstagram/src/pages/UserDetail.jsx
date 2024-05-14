import React, { useEffect, useState } from "react";
import { getDataById } from "../services";
import { endPoints } from "../services/api";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getDataById(endPoints.users, id).then((res) => {
      setUser(res);
    });
  }, [id]);
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex h-full">
      <div className="m-auto border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8 flex gap-x-12">
          <div>
            <div
              className="lg:h-20 lg:w-20 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              title="Woman holding a mug"
            >
              <img
                className="rounded-full h-full w-full object-cover"
                src={user.profile_picture}
                alt=""
              />
            </div>
            <p className="text-gray-600 flex items-center text-lg">
              <p className="text-green-500">Id: </p> {user.id}
            </p>
            <p className="text-gray-600 flex items-center text-lg">
              <p className="text-green-500">Username: </p> {user.username}
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <p className="text-green-500">Full Name: </p> {user.full_name}
            </p>
            <p className="text-lgtext-gray-600 flex items-center">
              <p className="text-green-500">Email: </p> {user.email}
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <p className="text-green-500">Phone Number: </p>
              {user.phone_number}
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <p className="text-green-500">Birthdate: </p> {user.birthdate}
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <p className="text-green-500">gender: </p> {user.gender}
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <p className="text-green-500">Bio: </p> {user.bio}
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <p className="text-green-500">Followers: </p>
              {user.followers}
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <p className="text-green-500">Following: </p> {user.following}
            </p>
          </div>
          <div>
            <h1 className="text-lg font-bold text-blue-600">Friends</h1>
            {user?.friends?.map((friend) => (
              <p
                key={friend.friend_id}
                className="text-lg text-gray-600 flex items-center"
              >
                ID: {friend.friends_id} Username: {friend.username}
              </p>
            ))}
          </div>
      <div className="flex-wrap">
            {user?.posts?.map((post) => (
              <div key={post.post_id}>
                <h2 className="text-lg font-bold text-blue-600">Post:</h2>
                <img src={post.image_url} alt="" />
                Caption: <p>{post.caption}</p>
                <div className="flex">
                  <p>{post.likes} </p>

                  <p className="text-red-400"> Likes</p>
                </div>
                {post.comments.map((comment) => (
                  <div key={comment.comment_id}>
                    <p className="text-lg text-orange-400">comments:</p>
                    <p>
                      {comment.user}: {comment.comment_text}
                    </p>
                  </div>
                ))}
              </div>
            ))}
       </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
