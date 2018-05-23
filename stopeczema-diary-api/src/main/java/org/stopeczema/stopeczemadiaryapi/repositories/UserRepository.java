package org.stopeczema.stopeczemadiaryapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.stopeczema.stopeczemadiaryapi.beans.User;

/**
 * @author Savva Kodeikin
 */
public interface UserRepository extends CrudRepository<User, String> {
    User findByEmail(String email);
}
