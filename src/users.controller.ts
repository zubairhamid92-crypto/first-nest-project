import {Controller,Get,Post,Req,Body} from "@nestjs/common"
@Controller("/users")
export class UsersController{
    @Post("/profile")
        getProfile(@Req() req){
            
            
return "hello "
        }
        @Post("/video")
        AddVideo(@Body() requestData: Record<string,any>)
        {
           console.log("check data",requestData);
           
        }
}