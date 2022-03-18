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

import com.viagensbella.viagensbella.entities.contato;
import com.viagensbella.viagensbella.repositorys.contatoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/contato")
public class contatoController {
	@Autowired
	private contatoRepository contatoRepository;
	
	@GetMapping(value="/contatos")
	public ResponseEntity <List<contato>> findAll(){
		List<contato> contatos = contatoRepository.findAll();
		return ResponseEntity.ok().body(contatos);
	}
	
	@GetMapping(value = "/{id}")
	public  ResponseEntity <contato> findById(@PathVariable Integer id){
		contato contato = contatoRepository.findById(id).get();
		 return ResponseEntity.ok().body(contato);
	}
	
	 // UPDATE
    @PutMapping("{id}")
    public ResponseEntity<contato> update(@PathVariable Integer id,@RequestBody contato contatoDetails) {
    	contato updatecontato = contatoRepository.findById((int) id).get();

    	updatecontato.setNome(contatoDetails.getNome());
    	updatecontato.setEmail(contatoDetails.getEmail());
    	updatecontato.setTelefone (contatoDetails.getTelefone());
        contatoRepository.save(updatecontato);

        return ResponseEntity.ok(updatecontato);
    }
    
    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {

    	contato contato = contatoRepository.findById((int) id).get();

    	contatoRepository.delete(contato);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    
    //POST
    @PostMapping("/contato")
    public contato salvarContato(@RequestBody contato contato) {
        return contatoRepository.save(contato);
    }
    
    
}
