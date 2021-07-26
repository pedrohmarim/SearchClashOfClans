const Axios = require('axios')

module.exports = {
    search(request, response) {

        const { hash } = request.headers

        Axios.get(`https://api.clashofclans.com/v1/players/${hash}`, {
            headers: {
                'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMwYzgwMjRiLTgyOTUtNDNhMS1hNTNhLWE2ZjdkNWIyMTQ5NSIsImlhdCI6MTYyNjkwMjM0MSwic3ViIjoiZGV2ZWxvcGVyL2ZiZjQ2YWI0LTA2ZGMtNWY1ZC01NDVjLWZhZDcwZDM3NGNkZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3Ny4yMjMuMjQzLjEyNCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.2SEdCMpakAmVOp_4nsAjThx7CRds9OSpL8h0mXHjGfZTTaVLRJkfesyoYIkVtksI6BCFctX0OuAaGptIgSX6Ew'
            }
        }).then(res => {
            return response.json(res.data)
        }).catch(() => {
            return response.json(request.status)
        })

    }
}