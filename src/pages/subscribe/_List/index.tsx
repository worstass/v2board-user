import type { FC } from 'react'
import React from 'react'
import { Space, Table, Tooltip, message } from 'antd'
import { QuestionCircleOutlined, LinkOutlined } from '@ant-design/icons'
import { useIntl, Link } from 'umi'
import clipboardy from '@umijs/deps/reexported/clipboardy'

export interface listItem {
  key: string
  name: string
  link?: string
  status: React.ReactNode
  rate: React.ReactNode
  tags: React.ReactNode
}

export interface listProps {
  dataSource: listItem[]
}

const List: FC<listProps> = (props) => {
  const { dataSource } = props
  const intl = useIntl()
  const columns = [
    {
      title: intl.formatMessage({ id: 'subscribe.list.column.name' }),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: () => (
        <>
          <Space>
            {intl.formatMessage({ id: 'subscribe.list.column.status' })}
            <Tooltip title={intl.formatMessage({ id: 'subscribe.list.column.status.tip' })}>
              <QuestionCircleOutlined />
            </Tooltip>
          </Space>
        </>
      ),
      dataIndex: 'status',
      key: 'status',
      align: 'center' as any,
    },
    {
      title: () => (
        <>
          <Space>
            {intl.formatMessage({ id: 'subscribe.list.column.rate' })}
            <Tooltip title={intl.formatMessage({ id: 'subscribe.list.column.rate.tip' })}>
              <QuestionCircleOutlined />
            </Tooltip>
          </Space>
        </>
      ),
      dataIndex: 'rate',
      key: 'rate',
      align: 'center',
    },
    {
      title: intl.formatMessage({ id: 'subscribe.list.column.tags' }),
      dataIndex: 'tags',
      key: 'tags',
    },
    {
      title: '',
      dataIndex: 'link',
      key: 'link',
      render: (link: string, record: any) => {
        return (
          <>
            {record.link !== undefined && (
              <Link
                to=""
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  clipboardy.write(record.link as string).then(() => {
                    message.success(intl.formatMessage({ id: 'common.message.copy_success' }))
                  })
                }}
              >
                <Space>
                  <LinkOutlined />
                  {intl.formatMessage({ id: 'subscribe.list.action.copy_link' })}
                </Space>
              </Link>
            )}
          </>
        )
      },
    },
  ]

  return (
    <>
      <div className="block block-rounded js-appear-enabled">
        <div className="block-header block-header-default">
          <h3 className="block-title">{intl.formatMessage({ id: 'subscribe.list.title' })}</h3>
        </div>
        <div className="block-content p-0">
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>
    </>
  )
}

export default List
