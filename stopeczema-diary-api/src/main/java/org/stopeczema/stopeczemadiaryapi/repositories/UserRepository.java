package org.stopeczema.stopeczemadiaryapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.stopeczema.stopeczemadiaryapi.beans.UserEntity;

/**
 * @author Savva Kodeikin
 */
public interface UserRepository extends CrudRepository<UserEntity, String> {
    UserEntity findByEmail(String email);
}
