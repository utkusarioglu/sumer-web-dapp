// import io from "_services/io/io.service";
import ethereumService from "_services/ethereum/ethereum.service";
import { push } from "_/slices/blocks/blocks.slice";
import fetchService from "_services/fetch/fetch.service";
import { setUserProfile } from "_slices/user/user.slice";

// export function startIo() {
//   console.log(io);
// }

export function startEthereum() {
  ethereumService.listen({
    newBlockCallback: (block) => push(JSON.parse(JSON.stringify(block))),
  });
}

export function startUser() {
  fetchService.fetchUser((data) => setUserProfile(data));
}
