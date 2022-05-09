"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "practice_log",
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          unique: true,
          comment: "연습 기록의 고유번호",
        },
        memo: {
          type: Sequelize.STRING(200),
          allowNull: false,
          defaultValue: "",
          comment: "연주자가 연습한 후에 남긴 소감 내용",
        },
        time: {
          type: Sequelize.SMALLINT.UNSIGNED,
          allowNull: false,
          comment: "연주자가 연습한 시간",
        },
        view: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
          comment: "연습 기록의 조회수",
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
        goal_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: {
              tableName: "goal",
            },
            key: "id",
          },
          allowNull: false,
          comment: "연습 기록에 설정된 목표의 고유번호",
        },
        player_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: {
              tableName: "player",
            },
            key: "id",
          },
          allowNull: false,
          comment: "연습 기록을 만든 연주자의 고유번호",
        },
      },
      {
        timestamps: true,
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("practice_log");
  },
};
