package com.viagensbella.viagensbella.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.viagensbella.viagensbella.entities.contato;

@Repository
public interface contatoRepository extends JpaRepository <contato, Integer>{

}
