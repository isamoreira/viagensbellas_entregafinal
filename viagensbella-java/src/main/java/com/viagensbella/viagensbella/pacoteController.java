package com.viagensbella.viagensbella;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.viagensbella.viagensbella.entities.pacote;
import com.viagensbella.viagensbella.repositorys.pacoteRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/pacote")
public class pacoteController {

	@Autowired
	private pacoteRepository pacoteRepository;
	
	@GetMapping(value="/pacotes")
	public ResponseEntity <List<pacote>> findAll(){
		List<pacote> pacotes = pacoteRepository.findAll();
		return ResponseEntity.ok().body(pacotes);
	}
	
	@GetMapping(value = "/{id}")
	public  ResponseEntity <pacote> findById(@PathVariable Integer id){
		pacote pacote = pacoteRepository.findById(id).get();
		 return ResponseEntity.ok().body(pacote);
	
	}
	

	@PutMapping("{id}")
    public ResponseEntity<pacote> update(@PathVariable Integer id,@RequestBody pacote pacoteDetails) {
    	pacote updatepacote= pacoteRepository.findById(id).get();

    	updatepacote.setDestino(pacoteDetails.getDestino());
    	updatepacote.setValor(pacoteDetails.getValor());
        pacoteRepository.save(updatepacote);

        return ResponseEntity.ok(updatepacote);
    }
    
    
    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {

    	pacote pacote = pacoteRepository.findById((Integer) id).get();

    	pacoteRepository.delete(pacote);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    //POST
    @PostMapping("/pacote")
    public pacote salvarPacote(@RequestBody pacote pacote) {
        return pacoteRepository.save(pacote);
    }
    
    
}
