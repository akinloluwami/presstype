import axios from "axios";

const blogExists = async (email: string) => {
  const response = await axios.get(`/api/blogs/exists?email=${email}`);
  return response;
};

export default blogExists;
