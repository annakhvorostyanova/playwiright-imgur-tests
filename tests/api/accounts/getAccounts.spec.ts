import { test, expect } from '@playwright/test';
const USER = "testprogmath";
const defaultAccountData = {
    id: 145270851,
    url: "testprogmath",
  };

test('get account base info', async ({request}) => {
const getAccountData = await request.get(`3/account/${USER}`);
expect(getAccountData.ok).toBeTruthy();

// const reponseBody = getAccountData.body();
expect(await getAccountData.json()).toHaveProperty("data.id",defaultAccountData.id );
expect(await getAccountData.json()).toHaveProperty("data.url",`${USER}` );

})