'use strict';

class UserSimpleModel {

  /**
   * @param {DB.User} userEntity - user entity
   */
  constructor(userEntity) {
    this.id = userEntity.id.toString();
    this.email = userEntity.email.toString();
    this.firstName = userEntity.firstName.toString();
    this.lastName = userEntity.lastName.toString();
  }
}

module.exports = UserSimpleModel;
