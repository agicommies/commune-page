const serverId = '941362322000203776'
const uri = `https://discord.com/api/guilds/${serverId}/widget.json`

async function getDiscordWidgetData() {
  try {
    const res = await fetch(uri, { next: { revalidate: 2000 } })
    return res.json()
  } catch (error) {
    return false
  }
}

export const DiscordWidget = async () => {
  const data = await getDiscordWidgetData()

  if (data)
    return (
      <div className='flex items-center'>
        <span className='mr-1 inline-block h-3 w-3 animate-pulse rounded-full bg-green-500' />
        <span className='text-shad w-auto text-sm text-title dark:text-white'>
          {data.presence_count} Online
        </span>
      </div>
    )
}
