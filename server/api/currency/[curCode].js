export default defineEventHandler(async(event) => {

    const { curCode } = event.context.params
    const { currencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${curCode}&apikey=${currencyKey}`

    const { data } = await $fetch(uri)

    return data
})