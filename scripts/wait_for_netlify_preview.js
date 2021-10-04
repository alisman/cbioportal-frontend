const NetlifyAPI = require('netlify');

const SITE_ID = 'c1e6c264-2677-4c6d-b283-b949d7489b9a';

// TODO replace this with a secret variable
const TOKEN = 'g7Ok1VcGra-cj4VX1Zbntvad1pR9DEbW1jg2kfD2Ouo';

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function listNetlifySites(search) {
    const client = new NetlifyAPI(TOKEN);
    let state = 'pending';

    while (state === 'pending') {
        const sites = await client.listSiteDeploys({ site_id: SITE_ID });
        const matching = sites.find(s => s.commit_ref.includes(search));

        if (!matching) {
            state = 'not found';
        } else if (matching.state === 'error') {
            state = 'error';
        } else {
            state = matching.state === 'ready' ? 'ready' : 'pending';

            if (state === 'pending') {
                const waitSec = 20;

                console.log(
                    `Deploy ${search} is ${matching.state}. Waiting for ${waitSec} seconds before polling again.`
                );
                await sleep(waitSec * 1000);
            }
        }
    }

    return state;
}

async function main() {
    const args = process.argv;
    const search = args.length > 2 ? args[2] : undefined;
    const state = search ? await listNetlifySites(search) : undefined;

    console.log(`Deploy ${search} ${state}`);

    if (state !== 'ready') {
        return 1;
    } else {
        return 0;
    }
}

main();
