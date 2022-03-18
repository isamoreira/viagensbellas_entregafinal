package com.viagensbella.viagensbella;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;

import com.viagensbella.viagensbella.repositorys.pacoteRepository;
import com.viagensbella.viagensbella.entities.contato;
import com.viagensbella.viagensbella.entities.pacote;
import com.viagensbella.viagensbella.repositorys.contatoRepository;

@SpringBootApplication
public class ViagensbellaApplication implements CommandLineRunner {

	@Autowired
	private pacoteRepository contatoRepository;
	
	@Autowired
	private contatoRepository pacoteRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(ViagensbellaApplication.class, args);
	}
		@Override
		public void run(String... args) throws Exception {
		

}
	
}


