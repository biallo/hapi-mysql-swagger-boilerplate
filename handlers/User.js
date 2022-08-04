// 获取账户活动记录
exports.getActivities = async (request, h) => {
  const { uid } = request.query;

  // 通过查询语句从 mysql 中获取记录
  // const result = await request.app.db.query(`
  //   select
  //     id,
  //     action_type as actionType,
  //     location,
  //     ip,
  //     created_time as createdTime
  //   from
  //     user_activities
  //   where
  //     uid=${id}
  //   order by
  //     created_time desc;
  // `);

  // fake result
  const result = [{
    id: 1,
    actionType: 1,
    location: 'Arcadia/Mars',
    ip: '0.0.0.0',
    createdTime: '2022-01-01T11:11:11.000Z'
  }, {
    id:2,
    actionType: 1,
    location: 'Casius/Mars',
    ip: '0.0.0.0',
    createdTime: '2022-02-02T22:22:22.000Z'
  }];

  return {
    code: 0,
    data: {
      list : result
    }
  };
};
