import { Navbar, Text, Avatar, Dropdown} from "@nextui-org/react";
import Link from "next/link";
import { Layout } from "./Layout";
import { useSession } from "next-auth/react";
export default function App() {
  const collapseItems = [
    "Home",
    "Create",
    "Favourite",
    "About",
  ];
  const Data=useSession()
  function userProfile(){
    return <Dropdown placement="bottom-right">
    <Navbar.Item>
      <Dropdown.Trigger>
        <Avatar
          bordered
          as="button"
          color="secondary"
          size="md"
          src="https://media.istockphoto.com/id/1208175274/vector/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-material-concept-vector.jpg?s=612x612&w=0&k=20&c=t4aK_TKnYaGQcPAC5Zyh46qqAtuoPcb-mjtQax3_9Xc="
        />
      </Dropdown.Trigger>
    </Navbar.Item>
    <Dropdown.Menu
      aria-label="User menu actions"
      color="secondary"
      onAction={(actionKey) => console.log({ actionKey })}
    >
      <Dropdown.Item key="profile" css={{ height: "$18" }}>
        <Text b color="inherit" css={{ d: "flex" }}>
          Signed in as
        </Text>
        <Text b color="inherit" css={{ d: "flex" }}>
          zoey@example.com
        </Text>
      </Dropdown.Item>
      <Dropdown.Item key="settings" withDivider>
        <Link href="/Account">Account</Link>
      </Dropdown.Item>
      <Dropdown.Item key="logout" withDivider color="error">
        Log Out
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  }
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Text b>Bloging Made Easy</Text>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Link style={{
            padding:"2px",
            fontSize:"20px",
            paddingLeft:"20px",
            color:"black"
          }} href="/">Home</Link>
          <Link style={{
            padding:"2px",
            fontSize:"20px",
            paddingLeft:"20px",
            color:"black"
          }} href="/Create">Create</Link>
          <Link style={{
            padding:"2px",
            fontSize:"20px",
            paddingLeft:"20px",
            color:"black"
          }} href="/Favourite">Favourite</Link>
          <Link style={{
            padding:"2px",
            fontSize:"20px",
            paddingLeft:"20px",
            color:"black"
          }} href="#">About</Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          {(Data.status!=='loading')&&(Data.status==='authenticated')?userProfile():<Link href={'/Login'}>Login</Link>}
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                href={(item=='Home')?"/":`/${item}`}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}