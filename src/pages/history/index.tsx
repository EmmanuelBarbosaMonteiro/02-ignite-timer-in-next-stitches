import Head from 'next/head'
import { HistoryContainer, HistoryList, Status } from './styles'

export default function History() {
  return (
    <>
      <Head>
        <title>History | Ignite Timer</title>
      </Head>

      <HistoryContainer>
        <h1>History</h1>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Duração</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="red">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="yellow">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>
    </>
  )
}