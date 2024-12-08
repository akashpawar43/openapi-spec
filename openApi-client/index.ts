import { DefaultService } from "./generated";

async function main() {
    const res = await DefaultService.getUser("1");
    console.log(res);
}

main();