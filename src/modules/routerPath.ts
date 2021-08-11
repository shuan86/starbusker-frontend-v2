class Path {
  public readonly busker_comment_board = '/busker_comment_board'
  public readonly busker_apply_performance = '/busker_apply_performance'
  public readonly busker_data = '/busker_data'
  public readonly busker_apply = 'busker_apply'
  public readonly member_info = '/member_info'
  public readonly comments_record = '/comments_record'
  public readonly chatroom = '/chatroom'
  public readonly busker = '/busker'
  public readonly enroll = '/enroll'
  public readonly login = '/login'
  public readonly index = '/index'

}

export const path = new Path()

class APIPATH {
  public readonly member = 'member'
  public readonly busker = 'busker'
  public readonly login = 'login'
  public readonly logout = 'logout'
  public readonly memberInfo = 'memberInfo'
  public readonly performances = 'performances'
  public readonly performance = 'performance'
}
export const apiPath = new APIPATH()
