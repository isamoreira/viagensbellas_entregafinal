package com.viagensbella.viagensbella.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.viagensbella.viagensbella.entities.pacote;

@Repository
public interface pacoteRepository extends JpaRepository <pacote, Integer> {



}
