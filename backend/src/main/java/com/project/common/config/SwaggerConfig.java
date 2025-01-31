package com.project.common.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
    info = @Info(title = "Nyami", version = "1.0"),
    servers = @Server(url = "http://localhost:8090", description = "로컬 서버")
)
public class SwaggerConfig {
}
