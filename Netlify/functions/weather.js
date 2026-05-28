exports.handler = async function(event) {

    const city =
    event.queryStringParameters.city

    const apiKey =
    process.env.api_key

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try {

        const response =
        await fetch(url)

        const data =
        await response.json()

        return {

            statusCode: 200,

            body: JSON.stringify(data)
        }

    }

    catch(error){

        return {

            statusCode: 500,

            body: JSON.stringify({
                error: "Failed to fetch weather"
            })
        }
    }
}