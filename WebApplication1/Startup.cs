﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

namespace DriveLogWebNg2
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            app.UseMvcWithDefaultRoute();
            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html"; // Put your Angular root page here 
                    await next();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();
            /*app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });*/
        }
    }
}
