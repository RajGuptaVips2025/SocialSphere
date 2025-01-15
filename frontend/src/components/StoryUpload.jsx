import React, { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StoryUpload = () => {
  const [media, setMedia] = useState(null);
  const [type, setType] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
    setType(file.type.startsWith("video") ? "video" : "image");
  };

  const handleStoryUpload = async (e) => {
    setUploadSuccess(true)
    e.preventDefault();
    const formData = new FormData();
    formData.append("media", media);
    formData.append("type", type);

    try {
      const response = await axios.post("/api/story/uploadStory", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      if (response.status === 200) {
        navigate("/");
      }
      console.log("Story uploaded:", response);
      toast.success("Story is successfully uploaded!");
    } catch (error) {
      console.error("Error uploading story:", error);
    }
    finally {
      setUploadSuccess(false)
      setMedia(null)
    }
  };

  return (
    <form onSubmit={handleStoryUpload}>
      <div className="flex gap-2">
        <Input type="file" accept="image/*,video/*" onChange={handleFileChange} required className="w-56" />
        {
          !uploadSuccess ?
            <Button type="submit">

              Upload Story</Button>
            :
            <Button disabled type="submit">
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Upload Story</Button>
        }

      </div>
    </form>
  );
};

export default StoryUpload;
