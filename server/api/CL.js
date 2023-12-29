export default defineEventHandler(async(event) =>  {

    // queryparams handler
    //const { name } = getQuery(event)

    //postdata handler
    //const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_zt99zPsKoZHJf4fI6nR5Sbq7WJiGJV7vRVqa1SHg')

    return data
})