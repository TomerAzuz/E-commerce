package com.ElectroMarket.edgeservice.config;

import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.publisher.Mono;

@Configuration
public class RateLimiterConfig {

    @Bean
    public KeyResolver keyResolver()    {
        // for now, all requests will be mapped to the same bucket
        return exchange -> Mono.just("anonymous");
    }
}