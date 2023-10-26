import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosInstance.get(url, {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        });
        setData(data.data);
      } catch (error) {
        if (error.message === "Network Error") {
          setError("server is down, please refresh");
        }
        if (error.response.status === 401) {
          toast.error("Login to view bookmarks", { id: "t" });
          navigate("/signin");
        }

        setError("server is down, please refresh");
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      getData();
    }, 2000);
  }, [url]);

  const toggleAddBookmark = (movieId, userId) => {
    const updatedData = data.map((movie) => {
      if (movie._id === movieId) {
        return { ...movie, bookmarkedBy: [userId] };
      } else {
        return movie;
      }
    });
    setData(updatedData);
    toast.success("Movie Bookmarked");
  };

  const toggleRemoveBookmark = (movieId) => {
    const updatedData = data.map((movie) => {
      if (movie._id === movieId) {
        return { ...movie, bookmarkedBy: [] };
      } else {
        return movie;
      }
    });
    setData(updatedData);
    toast.success("Movie Removed");
  };

  const handleAddBookmark = async (movieId, token, userId) => {
if (!userId){
  return toast.error("Login to Bookmark")
}

    try {
      toggleAddBookmark(movieId, userId);
      const { data } = await axiosInstance.get(`api/bookmark/add/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    } catch (error) {}
  };

  const handleRemoveBookmark = async (movieId, token) => {
    try {
      toggleRemoveBookmark(movieId);
      const { data } = await axiosInstance.get(
        `api/bookmark/remove/${movieId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
     
    } catch (error) {
     
    }
  };

  const updateUI = async (action, movieId, token, userId) => {
  
    // bookmark movie on the DB and update UI

    if (action === "add") {
      handleAddBookmark(movieId, token, userId);
    } else {
      handleRemoveBookmark(movieId, token);
    }
  };
  return { data, error, loading, updateUI };
};
