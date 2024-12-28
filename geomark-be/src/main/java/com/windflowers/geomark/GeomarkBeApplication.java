package com.windflowers.geomark;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableAspectJAutoProxy(proxyTargetClass = true, exposeProxy = true)
@EnableScheduling
public class GeomarkBeApplication {

    public static void main(String[] args) {
        SpringApplication.run(GeomarkBeApplication.class, args);
    }

}
