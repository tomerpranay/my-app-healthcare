import React, { useRef, useState, useEffect } from "react";
import DailyIframe from "@daily-co/daily-js";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

const createRoom = async () => {
  const apiKey =
    "0a41141358f6c0571b15f8b0b5596025fde424d4c56e2c97596570ff2779d049"; // Replace with your Daily.co API key

  try {
    const response = await axios.post(
      "https://api.daily.co/v1/rooms",
      {
        properties: {
          enable_chat: true,
          enable_screenshare: true,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.url;
  } catch (error) {
    console.error("Error creating room:", error);
    return null;
  }
};

const CallPage = () => {
  const { roomId } = useParams();
  const [callFrame, setCallFrame] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const joinCall = async (url) => {
      const frame = DailyIframe.createFrame();
      setCallFrame(frame);

      await frame.join({ url });

      frame.on("loaded", async () => {
        const localStream = await frame.getLocalVideoTrack();
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = new MediaStream([localStream]);
        }
      });

      frame.on("participant-joined", (event) => {
        const participant = event.participant;
        if (participant.local) return;

        const videoTrack = participant.tracks.video.persistentTrack;
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = new MediaStream([videoTrack]);
        }
      });
    };

    if (roomId) {
      const roomUrl = `https://yourdomain.daily.co/${roomId}`;
      joinCall(roomUrl);
    }

    return () => {
      if (callFrame) {
        callFrame.leave();
      }
    };
  }, [roomId]);

  const endCall = () => {
    if (callFrame) {
      callFrame.leave();
      setCallFrame(null);

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = null;
      }
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = null;
      }
    }
  };

  return (
    <div>
      <h1>Video Call</h1>
      <video ref={localVideoRef} autoPlay muted style={{ width: "300px" }} />
      <video ref={remoteVideoRef} autoPlay style={{ width: "300px" }} />
      <div>
        <button onClick={endCall}>End Call</button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [roomUrl, setRoomUrl] = useState("");

  const handleCreateRoom = async () => {
    const url = await createRoom();
    if (url) {
      setRoomUrl(url);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Daily.co Video Call</h1>
      <button
        onClick={handleCreateRoom}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Create Room
      </button>
      {roomUrl && (
        <div className="text-center">
          <p className="mb-2">Share this URL with others to join the call:</p>
          <a
            href={roomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {roomUrl}
          </a>
        </div>
      )}
    </div>
  );
};

function Videochat() {
  return (
    
      <Routes>
        <Route path="/call/:roomId" element={<CallPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
}

export default Videochat;
