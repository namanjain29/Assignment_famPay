import axios from "axios";

const getAllCards = async () => {
  const url = "https://run.mocky.io/v3/04a04703-5557-4c84-a127-8c55335bb3b4";
  try {
    const { data } = await axios.get(url);
    // console.log(data);
    return data.card_groups;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

export { getAllCards };
