import type { User } from "_/types/vendors/randomuser-me";

type FetchUserParams = (user: User) => void;

/**
 * Fetches a user id from randomuser.me
 */
function fetchUser(fetchCallback: FetchUserParams) {
  fetch("https://randomuser.me/api/")
    .then((data) => data.json())
    .then((response) => {
      fetchCallback(response.results[0]);
    });
}

const fetchService = {
  fetchUser,
};

export default fetchService;
