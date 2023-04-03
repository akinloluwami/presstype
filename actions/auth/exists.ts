import axios from "axios";

const blogExists = async (email: string) => {
  try {
    await axios.get(`/api/blogs/exists?email=${email}`);
    return true;
  } catch (error) {
    return false;
  }
};

export default blogExists;
