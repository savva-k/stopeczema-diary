package org.stopeczema.stopeczemadiaryapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.stopeczema.stopeczemadiaryapi.beans.User;

import java.util.Optional;

/**
 * @author Savva Kodeikin
 */
public interface UserRepository extends CrudRepository<User, String> {
    Optional<User> findByEmail(String email);
}
