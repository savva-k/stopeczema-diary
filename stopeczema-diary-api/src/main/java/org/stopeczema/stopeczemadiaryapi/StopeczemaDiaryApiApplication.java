package org.stopeczema.stopeczemadiaryapi;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StopeczemaDiaryApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(StopeczemaDiaryApiApplication.class, args);
    }

    @Bean
    ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
