/***
 * Author : Kishor Ranga
 * licence : Open to use by anyone
 * Date: 7th Feb 2019, Pune / Wakad
 */
import app from './app.controller'

class Server
{
    private static PORT:number = 3001;
    public static bootstrap()
    {
        app.listen(this.PORT, ()=>{
            console.log("Server Connected @port -", this.PORT)
        })
    }
}

Server.bootstrap();